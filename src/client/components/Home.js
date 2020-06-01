import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <div>
                <div>Hello my name is khan,kesse ho tussi </div>
                <button onClick={()=>console.log("clcick me")}  > clickME </button>
            </div>

        )
    }
}

export default Home