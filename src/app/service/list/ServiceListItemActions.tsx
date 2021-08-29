import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export interface ServiceListItemActionsProps {
    className?: string,
    totalCount: number,
    currentIndex: number,
    onServiceDeleteAction: (index: number) => void,
    onServiceMoveUpAction: (index: number) => void,
    onServiceMoveDownAction: (index: number) => void,
}


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    moveActions: {
        width: theme.spacing(16),
        display: 'inline-block',
    },
}));
 
const ServiceListItemActions: React.FC<ServiceListItemActionsProps> = (props) => {
    const { className, totalCount, currentIndex } = props;

    const hasArrowUp = currentIndex > 0;
    const hasArrowDown = currentIndex < totalCount - 1;

    const classes = useStyles();

    const onDeleteAction = () => {
        props.onServiceDeleteAction(currentIndex);
    };
    const onMoveUpAction = () => {
        props.onServiceMoveUpAction(currentIndex);
    };
    const onMoveDownAction = () => {
        props.onServiceMoveDownAction(currentIndex);
    };


    return ( 
        <div className={className}>
            <IconButton aria-label="delete" className={classes.margin} onClick={onDeleteAction}>
                <DeleteIcon />
            </IconButton>
            <div className={classes.moveActions}>
                {hasArrowUp && <IconButton aria-label="move_up" className={classes.margin} onClick={onMoveUpAction}><ArrowUpward /></IconButton>}
                {hasArrowDown && <IconButton aria-label="move_down" className={classes.margin} onClick={onMoveDownAction}><ArrowDownward /></IconButton>}
            </div>
        </div> 
    );
}
 
export default ServiceListItemActions;