export class SistemaAutenticacao {

    /* Classe com polimorfismo:
        - Pode receber qualquer tipo de 
          usuario (diretor, gerente ou cliente)
          que irá funcionar normalmente. Porém, o usuário
          precisa ter o método autenticar.
    */

    static login(usuario, senha) {

        if (SistemaAutenticacao.ehAutenticavel(usuario)) {
            return usuario.autenticar(senha);
        }

        return false;
    }

    static ehAutenticavel(usuario) {
        return (
            "autenticar" in usuario 
            && 
            usuario.autenticar instanceof Function
        );
    }
}