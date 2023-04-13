import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/index";


export const AuthContext = createContext({});

    function AuthProvider({children}){
        const [data , setData] = useState({})

        async function singIn({email, password}){

          try {
            const response = await api.post("./sessions", {email, password})
    
            const {user, token} = response.data
    
            api.defaults.headers.authorization = `Bearer ${token}`
            setData({user, token})

            localStorage.setItem("@Rocketseat:user", JSON.stringify(user))
            localStorage.setItem("@Rocketseat:token", (token))
    
          } catch (error) {
            if(error.response){
              alert(error.response.data.message)
            }else{
              alert("não foi possivel entrar")
            }
          }        
        }

        async function singOut(){
          localStorage.removeItem("@Rocketseat:user")
          localStorage.removeItem("@Rocketseat:token")

          setData({})
        }

        async function updateProfile({user, avatarFile}){

          try {

            if(avatarFile){
              const fileUploadForm = new FormData();
              fileUploadForm.append("avatar", avatarFile)

              const response = await api.patch("/users/avatar", fileUploadForm)
              user.avatar = response.data.avatar;
            }
    
            await api.put("/users", user)
    
            localStorage.setItem("@Rocketseat:user", JSON.stringify(user))
    
            setData({
              user,
              token: data.token
            })

            alert("Perfil atualizado")
    
          } catch (error) {
            if(error.response){
              alert(error.response.data.message)
            }else{
              alert("não foi possivel entrar")
            }
          } 
        }

        useEffect( () => {
          const user = localStorage.getItem("@Rocketseat:user")
          const token = localStorage.getItem("@Rocketseat:token")

          if(user && token){
            api.defaults.headers.authorization = `Bearer ${token}`

            setData({
              token,
              user: JSON.parse(user)
            })
          }
        }, [])

        return(
          <AuthContext.Provider value={{
            singIn,
            singOut,
            updateProfile,
            user: data.user}}>
            {children}
          </AuthContext.Provider>
        )
    }

    function useAuth(){
        const context = useContext(AuthContext)

        return context
    }

export{
  AuthProvider,
  useAuth
}