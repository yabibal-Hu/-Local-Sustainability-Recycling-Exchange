import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import userAuthHeader from "../Util/auth";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

type User = {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  role?: string;
  token?: string;
};

const AuthContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  profiles: User | null;
  setProfiles: React.Dispatch<React.SetStateAction<User | null>>;
}>({
  user: null,
  setUser: () => {},
  profiles: null,
  setProfiles: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profiles, setProfiles] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = await userAuthHeader();
        if (token && typeof token === "string") {
          const decodedToken = JSON.parse(
            atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
          );
          const { id, name, email, profilePicture, role } = decodedToken;
          setUser({ id, name, email, profilePicture, role, token });
        }
      } catch (error) {
        console.error("Error during authentication initialization:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (user?.token) {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/users/profile`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          setProfiles(response.data);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      };
      fetchUserProfile();
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, profiles, setProfiles }}>
      {children}
    </AuthContext.Provider>
  );
};
