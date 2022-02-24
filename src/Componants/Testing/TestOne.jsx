

export default function TestOne() {
    const modalInfo = [
        { id: 1, name: "Romeo Task", number: "1", Zuzatz: { gitLink: "one", status: "Live" } },
        { id: 2, name: "FizzBuzz", number: "2", Zuzatz: { gitLink: "two", status: "Live" } },
        { id: 3, name: "Progress", number: "3", Zuzatz: { gitLink: "three", status: "Progress" } },


    ];


    return (
        <>
            <div className="App">

                <div className="container-fluid  ">
                    <div className="row justify-content-center">

                        {modalInfo.map((info) => (

                            < div className=" border-end border-bottom border-1 border-dark  col-sm" style={{ height: "16rem" }} key={info.id} >

                                <div className="container-fluid m-0 p-0 d-flex flex-column justify-content-between " style={{ height: "100%" }}>
                                    <div className="row">
                                        <h1 className="card-title">{info.name}</h1>
                                    </div>
                                    <div className="row d-flex flex-row justify-content-between  border-1 border-dark">
                                        <div
                                            className="col "
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#staticBackdrop_${info.id}`}
                                        >
                                            Show more
                                        </div>
                                        <div className="col  border-start border-top border-dark d-flex justify-content-center align-items-center"><span className=" badge bg-warning " style={{ maxWidth: "min-content", height: "min-content" }}>{info.Zuzatz.status}</span></div>
                                    </div>
                                </div>
                                <div
                                    className="modal fade"
                                    id={`staticBackdrop_${info.id}`}
                                    tabIndex="-1"
                                    role="dialog"
                                    aria-labelledby={`staticBackdrop_${info.id}`}
                                    aria-hidden="true"
                                >
                                    <div
                                        className="modal-dialog modal-dialog-centered"
                                        role="document"
                                    >
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">
                                                    {info.id}
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="close btn btn-secondary"
                                                    aria-label="Close"
                                                    data-bs-dismiss="modal"
                                                >
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">...</div>
                                            <div className="modal-footer  justify-content-between">

                                                <button type="button" className="btn btn-primary">
                                                    Save changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </>
    );
}
