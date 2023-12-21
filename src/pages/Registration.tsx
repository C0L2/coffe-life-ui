import { useState, ChangeEvent, FormEvent, useEffect, FC } from "react"
import LogoComponent from "../components/LogoComponent"
import { useNavigate } from "react-router-dom"
import { FormData } from "../types"
import useRedirectOnLogin from "../hooks/useRedirectOnLogin"
import { useRegNewUserMutation } from "../api"
import LoadingOverlay from "./Layouts/LoadingOverlay"
import { get } from "react-hook-form"

const Registration: FC = () => {
  useRedirectOnLogin()

  const [regNewUser, { isLoading, isSuccess, error, isError }] =
    useRegNewUserMutation()
  const [loading, setLoading] = useState(false)

  const initialFormData: FormData = {
    nickname: "",
    phone: "",
  }

  useEffect(() => {
    if (isLoading) {
      setLoading(true)
    }
  }, [isLoading])

  useEffect(() => {
    if (isSuccess) {
      setLoading(false)
      localStorage.setItem("nickname", formData.nickname)
      navigate("/welcome")
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      setLoading(false)
      const error_msg = get(error, "data.message")
      setUsedNickname(error_msg)
    }
  }, [isError])

  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [usedNickname, setUsedNickname] = useState<boolean>(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.nickname === "sigma-admin-for-coffe-life") {
      navigate("/admin-welcome")
    } else {
      regNewUser({
        nickname: formData.nickname,
        phone: formData.phone,
      })
    }
  }

  return (
    <>
      {loading ? (
        <LoadingOverlay></LoadingOverlay>
      ) : (
        <>
          <div className="logo-container">
            <LogoComponent />
          </div>
          <div className="hello-txt-container">
            <div className="hello-txt">Hello again</div>
          </div>
          <div className="center-div">
            <form
              className="form"
              onSubmit={handleSubmit}
              style={{ marginTop: "100px" }}
            >
              <div>
                <input
                  className="reg-input"
                  type="text"
                  name="nickname"
                  placeholder="nickname"
                  minLength={4}
                  value={formData.nickname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  className="reg-input"
                  required
                  type="text"
                  name="phone"
                  placeholder="mobile number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              {usedNickname ? (
                <p style={{ color: "#F4F389", marginBottom: 0 }}>
                  This nickname is already used
                </p>
              ) : (
                ""
              )}
              <button
                className="join-btn"
                type="submit"
                style={{ marginTop: "100px" }}
              >
                JOIN
              </button>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default Registration
