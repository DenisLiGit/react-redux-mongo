import React, {useState} from 'react'
import Link from "@material-ui/core/Link";
import Star from "@material-ui/icons/Star";
import Tooltip from "@material-ui/core/Tooltip";

export const InfocardActionAdd = props => {
    const [save, setSave] = useState(false)

    return (
        <Tooltip title="Сохранено" open={save} placement='left'>
            <Link onClick={() => {
                setSave(true)
                setTimeout(() => {
                    setSave(false)
                }, 500)
                props.setFavorite({id: props.id, userId: props.userId})
            }}>
                <Star />
            </Link>
        </Tooltip>
    )
}