export function Calculadora() {
    return(
        <form action="">
            <div className="bill">
                <label htmlFor="">Conta</label>
                <div className="input-box">
                    <input type="text"/>
                </div>

                <div className="tip-percentage">
                    <label htmlFor="">Selecione a porcentagem</label>
                    <div>
                        <input type="butoon" value="5%" />
                        <input type="butoon" value="10%" />
                        <input type="butoon" value="15%" />
                        <input type="butoon" value="25%" />
                        <input type="butoon" value="50%" />

                        <input type="number" id="custom" placeholder="Outro" />
                    </div>
                </div>
            </div>
        </form>
    )
}