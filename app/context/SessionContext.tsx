"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { SessionUser } from "@/types";
import useAuth from "@/app/hooks/useAuth";

type LoginResult = { id: string };

type Ctx = {
  loginUser: (username: string, password: string) => Promise<LoginResult>;
  registerUser: (data: any) => Promise<void>;
  session: SessionUser | null;
  loading: boolean;
  userById: (id: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  OrderById: (id:  string) => Promise<void>;
};

export const SessionContext = createContext<Ctx | null>(null);

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx)
    throw new Error("useSession debe usarse dentro de <SessionProvider>");
  return ctx;
}

export const SessionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { login,register ,getUserById, verifyCookie, logout ,getOrderById } = useAuth();
  const [session, setSession] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Iniciar en true para mostrar loading inicial

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await login({ email, password });
      // if (res.status !== 200) throw new Error("Credenciales inválidas");

      const api = res.data;
      const name = String(api.name ?? api.name);
      const id = String(api.user_id ?? api.id);
      const emailUser = String(api.email ?? api.email);
      const phone = String(api.phone ?? api.phone);
      if (!id) throw new Error("Falta user_id en la respuesta");
      
      const newSession = {
        user_id_user_client: id,
        name: name,
        email: emailUser,
        phone: phone
      };
      
      // Actualizar la sesión inmediatamente
      setSession(newSession);
      console.log("session cuando se hace login: ", newSession);
      
      // Pequeña pausa para asegurar que el estado se actualice
      await new Promise(resolve => setTimeout(resolve, 100));
      
      return { id };
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (data: any) => {
    setLoading(true);

    try {
      const res = await register(data);
      console.log(res);

      
      // if (!res || res.status !== 200) {
      //   throw new Error("Error en el registro");
      // }
      
      // const { id } = res?.data;
      // if (id) {
      //   const newSession = {
      //     user_id: String(id),
      //     username: username
      //   };
      //   setSession(newSession);
      // }
    }
    catch (error) {
      console.error("Error al registrar usuario:", error);
    }
    finally {
      setLoading(false);
    }
  };

  // Verificar si hay un usuario iniciado
  const checkAuthentication = async () => {
    try {
      const response = await verifyCookie();
      
      if (response && response.status === 200 && response.data) {
        const userData = response.data;
        
        const newSession = {
          user_id_user_client: String(userData.user_id),
          username: String(userData.username),
          email: String(userData.email),
          phone: String(userData.phone)
        };
        setSession(newSession);
        console.log("Sesión verificada:", newSession);
        console.log("Asi queda la sesion del contexto: ", session);
        
      } else {
        // Si no hay cookie válida, limpiar la sesión
        setSession(null);
      }
    } catch (error) {
      console.error("Error verificando cookie:", error);
      setSession(null);
    }
  };

  const userById = async (id: string) => {
    try {
      const response = await getUserById(id);
      if (response?.status === 200) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error during search user:", error);
      toast.error("Error inesperado. Intenta nuevamente.");
      return null;
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      const response = await logout();
      
      // Limpiar la sesión independientemente de la respuesta del servidor
      setSession(null);
      
      if (response?.status === 200) {
        toast.success("Sesión cerrada correctamente");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      // Aún así limpiar la sesión local
      setSession(null);
      toast.error("Error al cerrar sesión, pero se limpió localmente.");
    } finally {
      setLoading(false);
    }
  };

  const OrderById = async (id: string) => {
    try {
      const response = await getOrderById(id);
      if (response?.status === 200) {
        return response.data;
      }
      return null;
    } catch (error) {
      console.error("Error during search user:", error);
      toast.error("Error inesperado. Intenta nuevamente.");
      return null;
    }
  };

  // Verificar autenticación al montar el componente
  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      await checkAuthentication();
      setLoading(false);
    };
    
    initializeAuth();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        loginUser,
        registerUser,
        session,
        loading,
        userById,
        OrderById,
        logoutUser
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
