const tarefas = [];

        // Adicionar tarefa
        document.getElementById('adicionarTarefa').addEventListener('click', () => {
            const descricao = document.getElementById('descricao').value;
            const mensagem = document.getElementById('msg').value;

            if (descricao.trim() === '' || mensagem.trim() === '') {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            tarefas.push({ descricao, mensagem, concluida: false });
            document.getElementById('descricao').value = '';
            document.getElementById('msg').value = '';
            alert('Tarefa adicionada com sucesso!');
        });

        // Listar tarefas
        document.getElementById('listarTarefas').addEventListener('click', () => {
            const campoTarefas = document.getElementById('campoTarefas');
            campoTarefas.innerHTML = '';

            tarefas.forEach((tarefa, index) => {
                const li = document.createElement('li');
                li.className = tarefa.concluida ? 'concluida' : '';
                li.innerHTML = `
                    <span>${index + 1}. ${tarefa.descricao} - ${tarefa.mensagem}</span>
                    <div>
                        <button class="btn-concluir">Concluir</button>
                        <button class="btn-excluir">Excluir</button>
                    </div>
                `;

                // Botão de concluir
                li.querySelector('.btn-concluir').addEventListener('click', () => {
                    tarefa.concluida = true;
                    li.className = 'concluida';
                });

                // Botão de excluir
                li.querySelector('.btn-excluir').addEventListener('click', () => {
                    tarefas.splice(index, 1);
                    li.remove();
                });

                campoTarefas.appendChild(li);
            });

            if (tarefas.length === 0) {
                campoTarefas.innerHTML = '<li>Nenhuma tarefa encontrada.</li>';
            }
        });