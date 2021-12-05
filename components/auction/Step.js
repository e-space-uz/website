import PlaceIcon from '@material-ui/icons/Place'
import EventIcon from '@material-ui/icons/Event'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

function Step({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <div className="stepData" key={index}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            gridGap: '10px',
                        }}
                    >
                        <div className="number">№{item?.lot_number}</div>
                        <div className="name" style={{ fontWeight: 'bold' }}>
                            {item?.name}
                        </div>
                    </div>
                    <div className="stepData_desc">
                        <p className="data_txt">
                            <EventIcon />
                            Auksion sanasi: {item?.auction_date_str}
                        </p>
                        <p className="data_txt">
                            <AttachMoneyIcon />
                            Boshlang'ich narx: {item?.start_price}
                        </p>
                        <p className="data_txt_2">
                            <PlaceIcon />
                            {item?.full_address}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Step
