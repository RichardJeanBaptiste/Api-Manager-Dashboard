import { useState } from "react";
import { Box, TextField } from "@mui/material";

export default function AddQuotes() {

    const Styles = {
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

    const handleChange = (e) => {
        let value = e.target.value;
        setAuthorInfo({
            ...authorInfo,
            [e.target.name] : value
        })
    }

    const handleSubmit = () => {
        console.log(authorInfo)
    }

    return (
        <>
            <Box>
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
                
                <button onClick={handleSubmit}>TEST</button>
            </Box>
        </>
    )
}