const util = {
    capitalizeFirstChar: str => str.charAt(0).toUpperCase() + str.substring(1),
    getUrlEndPoint: () => {
        let url = new URL(window.location.href).pathname.split("/")[1];
        url = url ? url : "home"; // home page has no url patern after domain name, so..        
        return util.capitalizeFirstChar(url);
    },
    isValidExtension: (fileName, listOfAcceptedExtensions) => {
        let fileNameChunks = fileName.split(".");
        const extension = fileNameChunks[fileNameChunks.length - 1];
        return listOfAcceptedExtensions.includes(extension)
    }
};


export default util;
