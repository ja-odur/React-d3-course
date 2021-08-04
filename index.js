import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv, csvFormat } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
       csv(csvUrl).then(setData)
    }, [])

    const message = (data) => {
       let message = '';
        message += Math.round(csvFormat(data).length / 1024) + ' KB\n';
        message += data.length + ' rows\n';
        message += data.columns.length + ' columns\n';
        return message;
    }
    return <pre>{data ? message(data) : "Loading..."}</pre>;
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)