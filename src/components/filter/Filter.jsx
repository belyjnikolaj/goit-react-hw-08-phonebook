import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { addFilter } from 'redux/filterSliсe';
import { selectFilter } from 'redux/selectors';
const Filter = () => {
    const dispatch = useDispatch();
  
 const filter = useSelector(selectFilter);
    const handleChangeFilter = (e) => {
    dispatch(addFilter(e.target.value ));
  };
    return (
        <div className={css['filter__conteiner']}>
            <h2 className={css['input__title']}>Find contacts by name</h2>
            <input className={css.input}
                type="text"
                placeholder='Seach...'
                value={filter}
                onChange={ handleChangeFilter } />  
        </div>
    )
}

export default Filter;