import { useId } from "react"
import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux";
import { ChangeFilter } from "../../redux/filter/slice";
import { selectNameFilter } from "../../redux/filter/selectors";

export default function SearchBox() {

    const filterInputId = useId();

    const dispatch = useDispatch()
    const filter = useSelector(selectNameFilter)

    return (
        <div className={css.container}>
            <label className={css.formField} htmlFor={filterInputId}>Find contacts by name or number
                <input className={css.input} id={filterInputId} value={filter} onChange={e => dispatch(ChangeFilter(e.target.value))}  type="text" />
            </label>
        </div>
    )
}