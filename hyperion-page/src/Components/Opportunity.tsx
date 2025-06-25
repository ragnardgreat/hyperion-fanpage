

export default function Opportunity() {



    return (<>
        <div id="opportunity">
            <img id="opImg" src="https://images6.alphacoders.com/310/310337.jpg"></img>
            <div id="opportunityText">
                <h1>Opportunity:City of the Future</h1>
            </div>
            <div id="opText">
                <h1>Have you ever thought<br></br> 
                "Wow, my city SUCKS. I wish there was a beautiful, clean and sleek city to live in, 
                where every employee and worker greets me like a gentleman/lady."
                Well we´ve got an "Opportunity" for you.
                Believe it or not, but the cost of living is actually +2000$ per week!
                Yes, you hear that right, Hyperions generous leader Handsome Jack will 
                pay its residence to live in Opportunity</h1><br></br>
                <h1>Too good to be true?<br></br> Well, it´s not.</h1><br></br><br></br>
                <h1 id="signUp" onClick={()=>{window.open("https://borderlands.fandom.com/wiki/Opportunity")}}>Sign up now </h1>
                <h1 id="opFinal" >Opportunity<br></br> Does Infact Wait!</h1>
            </div>

        </div>
    </>)
}