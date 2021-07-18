import axios from "axios";
const AbsURL1 = "https://complexica.herokuapp.com/";
const AbsURL2 = "https://complexica2.herokuapp.com/";
const listOfAcceptedExtensions = ["jpg", "png", "jpeg"];
const getUrlByGMTFn = () => {
    const gmtHour = new Date().toUTCString().split(" ")[4].split(":")[0];
    if (gmtHour >= 7 && gmtHour <= 19) {
        return AbsURL1;
    }
    return AbsURL2;
}
const util = {
    capitalizeFirstChar: str => str.charAt(0).toUpperCase() + str.substring(1),
    getUrlEndPoint: () => {
        let url = new URL(window.location.href).pathname.split("/")[1];
        url = url ? url : "home"; // home page has no url patern after domain name, so..        
        return util.capitalizeFirstChar(url);
    },
    isValidExtension: (fileName) => {
        let fileNameChunks = fileName.split(".");
        const extension = fileNameChunks[fileNameChunks.length - 1];
        return listOfAcceptedExtensions.includes(extension)
    },
    getUrlByGMT: getUrlByGMTFn(),
    awakeAPIGatewayAndBackEndHeroku() {
        const url = getUrlByGMTFn() + "healthcheck";
        axios({
            method: "get",
            url: url,
        }).then(/*(response) => {console.log(response);}*/);
    },
};


export default util;