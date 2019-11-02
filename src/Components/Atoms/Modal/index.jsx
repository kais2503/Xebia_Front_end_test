import React from "react";

import styles from './styles.module.scss';
import {Portal} from '../Portal';
import {Icon} from '../Icon';

const PartialModal = ({children, title, on, hide}) => {
    return (
        <Portal>
            {on && (
                <div className={styles['container-modal']}>
                    <div className={styles['modal-card']}>
                        <div className={styles['modal-header']}>

                            <span className={styles['modal-header-close']} onClick={hide}>
                                <Icon type="close"/>
                            </span>
                        </div>
                        <div className={styles['modal-body']}>
                            <div>{children}</div>
                        </div>
                    </div>
                    <div className={styles['modal-background']} onClick={hide}/>
                </div>
            )}
        </Portal>
    );
};

export const Modal = React.memo(PartialModal);