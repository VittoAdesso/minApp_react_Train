import React, { useRef } from 'react';
import EmojiPicker from './emojiPicker';

import styles from "./emojiPicker.module.scss";

const EmojiPickerInput = () => {
    const refInput = useRef(null); 

    return (
        <div className={styles.inputContainer}>
            <input ref={refInput}/>
            <EmojiPicker ref={refInput}/>
        </div>
    );
}

export default EmojiPickerInput;
