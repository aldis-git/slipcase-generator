const path = require('path');

module.exports = {
    devtool: "eval-cheap-source-map", // Pievienoju jo bez šī kaut kādu sūdu meta ārā HTML konsolē.
    mode: 'production', // production, development
    entry:{
        main: path.resolve(__dirname, 'src/index.js'), //main ir "lable" kuru iedodam šim failam, brīvas izvēles. path.resolve dabon pilno path kurā patreiz atrodamies
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // šis būs outputā kā 'main.bundle.js'. [name] tiek ievietots tas, kas ir rakstīts entry objektā.
    }
}