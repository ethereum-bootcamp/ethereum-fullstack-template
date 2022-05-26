import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const nftData = {
    name: 'NY Times',
    account: '0xb794f5ea0ba39494ce839613fffba74279579269',
    description: 'News subscription'
};

export default function MintNFT() {
    let navigate = useNavigate();
    function handleClick() {
        navigate("/mint-confirmation");
    }

    return (
        <div justifyContent="center">
            <Grid item>
                <Card sx={{ minWidth: 275, maxWidth: 400 }}>
                    <CardContent>
                        <Typography variant="h5">
                            {nftData.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {nftData.account}
                        </Typography>
                        <Typography variant="body2">
                            {nftData.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="medium"
                            onClick={handleClick}    
                        >Mint NFT</Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
        
    );
}