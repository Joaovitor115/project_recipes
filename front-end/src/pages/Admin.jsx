// import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavBar2 from '../components/NavBar2';
import postLogin from '../utils/functions';

function AdminManage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('1');
  const [err, setError] = useState('');
  const [user, setUser] = useState([]);
  //   const history = useHistory();

  const SIX = 6;
  const TWELVE = 12;
  const OK = 201;
  const NOTOK = 409;

  const isValid = name.length >= TWELVE
  && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  && password.length >= SIX;

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  //   const response = async () => {
  //     const result = await fetch('http://localhost:3001/users'); // Confirmar rota
  //     const data = await result.json();
  //     setUsers(data);
  //   };
  //   response();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      // const { history } = props;
      await postLogin(
        'http://localhost:3001/register',
        { name, email, password, role },
        user.token,
      ).then((data) => {
        if (data.type === OK) {
          setName('');
          setEmail('');
          setPassword('');
          setRole('1');
        } else if (data.type === NOTOK) {
          setError('Usuário já cadastrado');
        }
      }).catch((error) => {
        console.log(error);
        setError('Ocorreu um erro ao realizar o cadastro');
      });
    }
  };

  return (
    <div>
      <NavBar2 linkOrders="GERENCIAR USUÁRIOS" />

      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="admin_manage__input-name"
              type="text"
              id="name"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            E-mail:
            <input
              data-testid="admin_manage__input-email"
              type="email"
              id="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="admin_manage__input-password"
              type="password"
              id="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
        </div>
        <div>
          Tipo:
          <select
            data-testid="admin_manage__select-role"
            type="role"
            id="role"
            value={ role }
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="seller">seller</option>
            <option value="customer">customer</option>
          </select>

        </div>

        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ !isValid }
        >
          CADASTRAR
        </button>
      </form>
      <div
        data-testid="admin_manage__element-invalid-register"
      >
        {err && <div>{err}</div>}
      </div>
      {/* <div>
        Lista de Usuários
        {
          users.map((id, user) => (
            <div key={ id }>
              <div>
                Item
                <p
                  data-testid={ `admin_manage__element-user-table-item-number-${id}` }
                >
                  {user.id}
                </p>
              </div>
              <div>
                Nome
                <p
                  data-testid={ `admin_manage__element-user-table-item-number-${id}` }
                >
                  {user.nome}
                </p>
              </div>
              <div>
                Email
                <p
                  data-testid={ `admin_manage__element-user-table-item-number-${id}` }
                >
                  {user.email}
                </p>
              </div>
              <div>
                Tipo
                <p
                  data-testid={ `admin_manage__element-user-table-item-number-${id}` }
                >
                  {user.tipo}
                </p>
              </div>
              <div>
                {' '}
                Excluir
                <button
                  type="button"
                  data-testid={ `customer_products__button-card-rm-item-${id}` }
                  name={ name }
                  onClick={ remove }
                >
                  -
                </button>
              </div>
            </div>
          ))
        }
      </div> */}
    </div>
  );
}

AdminManage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default AdminManage;
