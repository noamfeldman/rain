import { Typography } from "@mui/material";
import { IDropsProps } from "../model/interfaces";

export default function RainMessages(props: IDropsProps) {
    const { numOfDrops } = props;
    let message = "איזה צדיק! ישתבח שמו.... לעד!";
    if (numOfDrops < 25) {
        message = "ואהבת לרעך כמוך";
    } else if (numOfDrops < 50) {
        message = "תפילין הנחת?";
    } else if (numOfDrops < 75) {
        message = "נותן בסתר?";
    } else if (numOfDrops < 100) {
        message = "חסר לנו אחד למיניין, תצטרף?";
    }
    return (
        <Typography variant="h5" id="home-content" textAlign="center" noWrap={false}>
            {message}
        </Typography>
    )
}