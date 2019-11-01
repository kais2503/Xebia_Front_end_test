import React from "react";

import styles from "./styles.module.scss";

const PartialSpinner = () => <div className={styles['spinner-container']}>
    <div className={styles.spinner}></div>
</div>

export const Spinner = React.memo(PartialSpinner);