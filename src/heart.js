import React from 'react';

export default class Heart extends React.Component {

    onClick = () => {
        const { click } = this.props
        click && click();
    }

    render() {
        return <div className="heartWrapper">
            <div className="heart"></div>
            <div className="whiteHeart"></div>
            <ul id='mark' style={{ display: 'none' }}>
                <li class='slice-1 slice'> </li>
                <li class='slice-2 slice'> </li>
                <li class='slice-3 slice'> </li>
                <li class='slice-4 slice'> </li>
                <li class='slice-5 slice'> </li>
                <li class='slice-6 slice'> </li>
                <li class='slice-7 slice'> </li>
                <li class='slice-8 slice'> </li>
                <li class='slice-9 slice'> </li>
                <li class='slice-10 slice'> </li>
            </ul>
            {/* <div className="heart bounce" onClick={this.onClick}></div> */}
        </div>
    }
}