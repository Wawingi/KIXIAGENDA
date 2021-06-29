<!doctype html>
<head>
    <style>
        .cor-azulE{
            background: #295380;
            color: #fff;
        }    
        .cor-azulC{
            background: #e0efff;
            color: #111;
        }
        body{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 12px;
        }
        #Linha{
            height:1px;
            color:#f5f6f8;
            background-color:rgb(211, 214, 213);
        }

        .tabela-relatorio{
            border: 1px solid #d1cece;
        }

        .tabela-relatorio > tr{
            border: 1px solid #d1cece;
        }

        .tabela-relatorio > tr > td{
            border: 1px solid #d1cece;
        }
    </style>     
</head>
<body style="background:#fff">
<br>
<div class="container-fluid">
    <table width="700px" style="margin-left:auto;margin-right:auto;position:relative" class="tabela-relatorio">
        <tr>
            <td width="20%" style="text-align:center;color:#111;font-weight:bold">{{$tarefa->codigo}}</td>
            <td style="font-size:14px;font-weight: bold" class="cor-azulE" colspan="5">
                <br>
                [Registo de Actividade]<br> 
                {{$tarefa->tipo}} : {{$tarefa->titulo}}
                <br><br>
            </td>
        </tr>
        <tr>
            <td class="cor-azulE">ORIGEM: </td>
            <td class="cor-azulC" colspan="5"> {{$tarefa->origem}} :  {{$tarefa->origem_dado}}</td>
        </tr>
        <tr>
            <td class="cor-azulE">DE: </td>
            <td width="20%" class="cor-azulC">
                {{$tarefa->departamento_origem}}<br>
                {{$solicitante}}
            </td>
            <td>
                <img
                    style="border:solid #d0d5dc 1px"
                    src="data:image/png;base64,{{ $imageSolicitante }}"
                    alt="user-image"
                    width="60px"
                    height="60px"/>
            </td>
            <td width="10%" class="cor-azulE">PARA:</td>
            <td width="20%" class="cor-azulC">
                {{$tarefa->departamento_destino}}<br>
                {{$responsavel}}
            </td>
            <td>
                <img
                    style="border:solid #d0d5dc 1px"
                    src="data:image/png;base64,{{ $imageResponsavel }}"
                    alt="user-image"
                    width="60px"
                    height="60px"/>
            </td>
        </tr>
        <tr>
            <td colspan="6"><br></td>
        </tr>
        <tr>
            <td class="cor-azulE">Data de solicitação: </td>
            <td class="cor-azulC" colspan="5">{{$tarefa->data_solicitacao}}</td>
        </tr>
        <tr>
            <td class="cor-azulE">Data Prevista de Execução: </td>
            <td class="cor-azulC" colspan="2">{{$tarefa->data_prevista}}</td>
            <td width="20%" class="cor-azulE">Tempo de Registo: </td>
            <td colspan="2" class="cor-azulC">{{$tarefa->tempo}}</td>
        </tr>
        <tr>
            <td colspan="6"><br></td>
        </tr>
        <tr>
            <td class="cor-azulE" style="text-align:center" colspan="6">Descrição </td>
        </tr>
        <tr>
            <td colspan="6">
            <br>
            {{$tarefa->descricao}}
            <br><br>
            </td>
        </tr>
        <tr>
            <td style="background:#e3e3e3;color:#797a7a;text-align:center" colspan="6">
                <p style="font-size:10px">Sistema KixiAgenda v1.0.0 - 2021</p>
            </td>
        </tr>
    </table>
</div>
</body>
</html>
