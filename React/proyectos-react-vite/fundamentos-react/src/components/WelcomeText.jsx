//Desestructurando y por devolver solo un jsx en una linea se omite el return y las llaves
const WelcomeText = ({user}) => <h3>{user?'Online':'Offline'}</h3>

export default WelcomeText