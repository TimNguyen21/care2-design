import React from 'react';
import '../../scss/air-traffic-control/FilterForm.scss'

const FilterForm = (props) => {
    return (
        <section className="filter-form">
            <label className="filter-form__label">filters</label>
            <div className='filter-form__input-content'>
                <label className='filter-form__input-label'>Driver</label>
                <input className='filter-form__input' name='driver'/>
            </div>
            <div className='filter-form__input-content'>
                <label className='filter-form__input-label'>Country</label>
                <input className='filter-form__input' name='country'/>
            </div>
            <div className='filter-form__input-content'>
                <label className='filter-form__input-label'>State</label>
                <input className='filter-form__input' name='state'/>
            </div>
            <div className='filter-form__checkbox-content'>
                <input type='checkbox' className='filter-form__checkbox' name='facebook'/>
                <label className='filter-form__checkbox-label'>Facebook Eligible</label>
            </div>
            <div className='filter-form__checkbox-content'>
                <input type='checkbox' className='filter-form__checkbox' name='tap'/>
                <label className='filter-form__checkbox-label'>TAP Eligible</label>
            </div>
        </section>
    )
}

export default FilterForm;