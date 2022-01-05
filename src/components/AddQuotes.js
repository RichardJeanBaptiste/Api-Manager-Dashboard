import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import ShowQuotes from "./ShowQuotes";

export default function AddQuotes() {

    const Styles = {
        root: {
            display: 'flex',
            flexDirection: 'row'
        },
        infoContainer: {
            display: 'flex',
            flexDirection: 'column'
        },
        formStyle: {
            marginTop: '2%',
            width: '25em',
        }
    }


    const [authorInfo, setAuthorInfo] = useState({
        name: "",
        quote: "",
        imageUrl: "",
        desc: "",
        life: "",
        wiki: "",
        networth: "",
        education: ""
    })

    const [newQuotes, setNewQuotes] = useState([]);

    const handleChange = (e) => {
        let value = e.target.value;
        setAuthorInfo({
            ...authorInfo,
            [e.target.name] : value
        })
    }

    const handleSubmit = () => {

        const data = {
            "name": authorInfo.name.toLowerCase(),
            "image": authorInfo.imageUrl,
            "bio": {
                "desc": authorInfo.desc,
                "life": authorInfo.life,
                "wiki": authorInfo.wiki,
                "networth": authorInfo.networth,
                "education": authorInfo.education
            },
            "quotes": newQuotes
        }
        
        fetch('http://localhost:4000/edit/addquotes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        setAuthorInfo({
            name: "",
            quote: "",
            imageUrl: "",
            desc: "",
            life: "",
            wiki: "",
            networth: "",
            education: ""
        })

        setNewQuotes([])
    }

    const removeQuote = (quoteToRemove) => {

        let quotesCopy = [...newQuotes];

        quotesCopy = quotesCopy.filter((item) => {
            return  item !== quoteToRemove           
        });

        setNewQuotes(quotesCopy)
        
    }

    const QuoteField = (props) => {

        const [ displayQuote, setDisplayQuote ] = useState("")

        const handleChange = (e) => {
            setDisplayQuote(e.target.value);
        }

        const addQuote = () => {

            let a = [...props.quoteObject];
            a.push(displayQuote)
            props.setQuoteObject(a)
            setDisplayQuote("")
        }

        const addQuoteEnter = (e) => {
            let code = e.keyCode || e.which;
            if(code === 13){
                addQuote();
            }
        }


        return (
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <TextField
                    name='quote'
                    label='quote'
                    value={displayQuote}
                    onChange={handleChange}
                    onKeyPress={addQuoteEnter}
                />
                <Button onClick={addQuote} variant='outlined'>Add</Button>
            </Box>
        )
    }

    return (
        <>
            <Box style={Styles.root}>

                <Box style={Styles.infoContainer}>
                    <TextField
                        name='name'
                        label='name'
                        value={authorInfo.name}
                        onChange={handleChange}
                        variant='outlined'
                        sx={Styles.formStyle}
                    />

                    <TextField
                        name='desc'
                        label='desc'
                        value={authorInfo.desc}
                        onChange={handleChange}
                        variant='outlined'
                        sx={Styles.formStyle}
                    />

                    <TextField
                        name='imageUrl'
                        label='imageUrl'
                        value={authorInfo.imageUrl}
                        onChange={handleChange}
                        variant='outlined'
                        sx={Styles.formStyle}
                    />

                    <TextField
                        name='life'
                        label='life'
                        value={authorInfo.life}
                        onChange={handleChange}
                        variant='outlined'
                        sx={Styles.formStyle}
                    />

                    <TextField
                        name='wiki'
                        label='wiki'
                        value={authorInfo.wiki}
                        onChange={handleChange}
                        variant='outlined'
                        sx={Styles.formStyle}
                    />

                    <TextField
                        name='networth'
                        label='networth'
                        value={authorInfo.networth}
                        onChange={handleChange}
                        variant='outlined'
                        sx={Styles.formStyle}
                    />

                    <TextField
                        name='education'
                        label='education'
                        value={authorInfo.education}
                        onChange={handleChange}
                        variant='outlined'
                        sx={Styles.formStyle}
                    />

                    <Button onClick={handleSubmit}>Submit</Button>
                </Box>

                <Box>   
                    <QuoteField quoteObject={newQuotes} setQuoteObject={setNewQuotes}/>
                    <ShowQuotes data={newQuotes} removeQuoteFunction={removeQuote}/>
                </Box>
                
                
            </Box>
        </>
    )
}