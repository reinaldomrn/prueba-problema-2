const{ response } = require('express');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

const timeZonePost = (req, res = response) => {
    const { hora, timeZone } = req.body;
console.log(req);
    //creacion del onjeto de salida
    let exit = {
        response: {
            time: moment(hora, 'HH:mm:ss').add(parseInt(timeZone), 'hours').format('HH:mm:ss'),
            timezone: 'utc',
        }
    }

    //creamos y escribimos el archivo .json
    fs.writeFile('exit.json', JSON.stringify(exit, null, 4), function (err) {
        if (err) res.status(502).json({
            msg: err.message
        });        
    });
    
    //retornamo la salida    
    res.status(200).json( exit );
}

const downloadFile = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'exit.json'));
}

module.exports = {
    timeZonePost,
    downloadFile
}