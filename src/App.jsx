import Routes from './Routes';
import './styles.css';

const App = () => {
  return (
<<<<<<< HEAD
    <Routes />
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute component={Home} />} />
        <Route path="/notes" element={<PublicRoute component={Notes} />} />
        <Route
          path="/login"
          element={
            <div className="form">
              <form onSubmit={handleSubmit}>

                <h2>LOGIN</h2>
                {inputs.map((input) => (
                  <Login
                    key={input.id}
                    {...input}
                    value={values[input]}
                    onChange={onChange}
                  />
                  ))}
                <div className="check">
                  <input type="checkbox" name="checkbox" id="3" value={checkValue} onChange={checkOnchange} />
                  <label htmlFor="checkbox">Remember me?</label>
                </div>
                <div className="submit">
                  <input type="submit" value="LOGIN" />
                </div>
                <h4>Forgot password ?</h4>
                <h5>OR</h5>
              </form>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
>>>>>>> e2cebda98eedb8839ef5b1090b50e1f7089c5a31
  );
};

export default App;
