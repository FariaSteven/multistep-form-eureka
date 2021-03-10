import React from 'react';

import Container from '@material-ui/core/Container';

import Swal from 'sweetalert2';

function Submit() {
    return (
        <Container maxWidth="sm">

            {Swal.fire({
                title: 'Obrigado por se inscrever &#128512;',
                icon: 'success',
                confirmButtonText: 'Voltar',
          })}
        </Container>
    )
}

export default Submit;