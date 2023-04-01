import styles from '/styles/Home.module.css'
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link'
import InputLabel from '@mui/material/InputLabel';


export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Link className={styles.home} href="/">
                <Button variant="contained" endIcon={<HomeIcon />}>Home
                    </Button>
                    </Link>


                <h1>Register a new analysis</h1>
                <div className={styles.center}>
                <FormControl variant="standard" sx={{ m: 1, width: 300 }} action="/register_submit" method="post">
                    <InputLabel id="department-label">Department</InputLabel>
                    <Select required disabled labelId="department-label" label="Department" id="department" name="department" defaultValue="Office for National Statistics">
                        <MenuItem value="Office for National Statistics">Office for National Statistics</MenuItem>
                    </Select>
                    <TextField required label="Business area" type="text" id="area" name="area" variant="standard" />
                    <TextField required label="Analysis name" type="text" id="analysis" name="analysis" variant="standard" />
                    <Button type="submit">Register</Button>
                </FormControl>
                </div>
            </main>
        </>
    )
}