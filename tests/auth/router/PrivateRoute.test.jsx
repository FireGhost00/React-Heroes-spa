import { render,screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context";
import { PrivateRoute } from "../../../src/heroes/routes/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el <PrivateRoute/>>', () => { 
    
    
    test('debe de mostrar el children si  esta autenticado', () => { 
       

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: '123'}
        }

        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                      <PrivateRoute>
                    <h1>Ruta Privada</h1>
                </PrivateRoute>  
                </MemoryRouter>
              
            </AuthContext.Provider>
            );
             expect( screen.getByText('Ruta Privada')).toBeTruthy();
            expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
            });
 })