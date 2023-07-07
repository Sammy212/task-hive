import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.container}>


        {/* Left Side*/}
        <div className={css.dashboard}>
            
            <div className={css.dashboardHead}>
                <div className={css.head}>
                    <span>Dashboard</span>

                    <div className={css.durationButton}>
                        <select name="" id="">
                            <option value="">1 week</option>
                            <option value="">1 Month</option>
                            <option value="">1 Year</option>
                        </select>
                    </div>

                </div>

                <div className={css.cards}>
                    cards
                </div>
            </div>
        </div>

        <div className={css.orders}>
            orders
        </div>
    </div>
  )
}

export default Dashboard