import { useContext } from "react";
import AppContext from "./AppContext.js";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from 'axios'


const AppProvider = (props) => {

    // const url = "https://quixotic-thoughtful-edam.glitch.me"
    // const url = "http://localhost:5000"
    const url = "https://car-service-backend-spqg.onrender.com"

    // pre purchase service API
    const CreatePrePurchaseInspectionApi = async (lead) => {

        try {
            await axios.post(`${url}/api/leads/PrePurchaseInspection`, lead)
                .then((res) => {
                    alert("Message Sent successfully!")
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert('Message not sent!.~~' + err.response?.data?.msg)
                })

        } catch (error) {
            console.log(error)
        }
    }
    const CreateCarValuationApi = async (lead) => {
        console.log("insurance")

        try {
            await axios.post(`${url}/api/leads/CarValuation`, lead)
                .then((res) => {
                    alert("Message Sent successfully!")
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert('Message not sent!.~~' + err.response?.data?.msg)
                })

        } catch (error) {
            console.log(error)
        }
    }
    const CreateCarInsuranceAPI = async (lead) => {
        console.log("insurance")

        try {
            await axios.post(`${url}/api/leads/CarInsurance`, lead)
                .then((res) => {
                    alert("Message Sent successfully!")
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert('Message not sent!.~~' + err.response?.data?.msg)
                })

        } catch (error) {
            console.log(error)
        }
    }
    const CreateSellYourCarApi = async (lead) => {
        console.log("insurance")

        try {
            await axios.post(`${url}/api/leads/SellYourCar`, lead)
                .then((res) => {
                    alert("Message Sent successfully!")
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert('Message not sent!.~~' + err.response?.data?.msg)
                })

        } catch (error) {
            console.log(error)
        }
    }
    const CreateKeyDuplicationApi = async (lead) => {
        console.log("insurance")

        try {
            await axios.post(`${url}/api/leads/KeyDuplication`, lead)
                .then((res) => {
                    alert("Message Sent successfully!")
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert('Message not sent!.~~' + err.response?.data?.msg)
                })

        } catch (error) {
            console.log(error)
        }
    }
    const CreateConciergeServiceApi = async (lead) => {
        console.log("insurance")

        try {
            await axios.post(`${url}/api/leads/ConciergeService`, lead)
                .then((res) => {
                    alert("Message Sent successfully!")
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert('Message not sent!.~~' + err.response?.data?.msg)
                })

        } catch (error) {
            console.log(error)
        }
    }
    const CreateGarageEntryApi = async (lead) => {
        console.log("insurance")

        try {
            await axios.post(`${url}/api/leads/MyGarage`, lead)
                .then((res) => {
                    alert("Message Sent successfully!")
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    alert('Message not sent!.~~' + err.response?.data?.msg)
                })

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <AppContext.Provider value={{ CreateGarageEntryApi, CreateConciergeServiceApi, CreateKeyDuplicationApi, CreatePrePurchaseInspectionApi, CreateCarInsuranceAPI, CreateCarValuationApi, CreateSellYourCarApi }}>
            {props.children}
        </AppContext.Provider>
    )
}

export const GlobalProvider = () => {
    return useContext(AppContext)
}

export default AppProvider;
