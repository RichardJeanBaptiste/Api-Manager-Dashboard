import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

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
            width: '35em',
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
        //console.log(authorInfo)
        console.log(newQuotes)
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

        return (
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <TextField
                    name='quote'
                    label='quote'
                    value={displayQuote}
                    onChange={handleChange}
                />
                <Button onClick={addQuote}>Add</Button>
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
                </Box>

                <Box>   
                    <QuoteField quoteObject={newQuotes} setQuoteObject={setNewQuotes}/>
                </Box>
                
                <Button onClick={handleSubmit}>TEST</Button>
            </Box>
        </>
    )
}