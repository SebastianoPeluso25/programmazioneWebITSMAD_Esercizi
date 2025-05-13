/**Write a function named helloWorld that:
○ takes 1 parameter, a language code (e.g. "es", "de", "en")
○ returns "Hello, World" for the given language, for at least 3 languages. It should default to
returning English.
● Call that function for each of the supported languages and log the result to
make sure it works. */

    // if (CodLingua == "es") {
    //     console.log("Hola Mundo")
    // }else if (CodLingua == "de") {
    //     console.log("Hallo Welt")
    // }else if(CodLingua == "en"){
    //     console.log("Hello World")
    // }

let CodLingua = "";


function helloWorld(CodLingua) {



    switch (CodLingua) {
        case "es":
            console.log("Hola Mundo");
            break;
        case "de":
            console.log("Hallo Welt");
            break;
        case "en":
            console.log("Hello World");
            break;
    
        default:
            break;
    }


}

helloWorld("en");
helloWorld("de");
helloWorld("es");
