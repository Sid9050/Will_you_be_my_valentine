import "./App.css";
import { useState } from "react";

function App() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "What if I asked really nicely?",
            "Pretty please",
            "With a chocolate top",
            "What about Baware ki aalo puri",
            "PLEASE MERI JAAN 🥹",
            "I am going to cry 😫",
            "Yep im crying 😭",
            "I am going to die",
            "Yep im dead",
            "ok ur talking to sid's ghost",
            "please cutiepie",
            "PRETTY PLEASE",
            "MANSI man jaa na",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };
    return (
        <div className="-mt-16 flex h-screen flex-col items-center justify-center" style={{marginTop:"64px", height:"screen" }}>
            {yesPressed ? (
                <>
                    <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
                    <div style={{marginLeft:"16px", marginRight:"16px", fontSize:"30px", fontWeight:"bold"}}>
                        WOOOOOO!!! I love you meri jaan!! ;
                    </div>
                </>
            ) : (
                <>
                    <img
                        className="h-[200px]"
                        style={{height:"200px"}}
                        src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                    />
                    <h1 className="my-4 text-4xl">
                        Will you be my Valentine Mansi?
                    </h1>
                    <div className="flex items-center">
                        <button
                            className="yes-b"
                            style={{ fontSize: yesButtonSize }}
                            onClick={() => setYesPressed(true)}
                        >
                            Yes
                        </button>
                        <button
                            onClick={handleNoClick}
                            className="no-b"
                        >
                            {noCount === 0 ? "No" : getNoButtonText()}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
