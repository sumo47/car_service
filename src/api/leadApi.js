import axios from 'axios'
const url = "https://quixotic-thoughtful-edam.glitch.me"


const PrePurchaseInspectionApi = async (lead) => {

    try {
        await axios.post(`${url}/api/leads`, lead)
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

export default PrePurchaseInspectionApi
