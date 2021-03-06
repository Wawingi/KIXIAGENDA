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

        .cor-verdeE{
            background: #0d661c;
            color: #fff;
        }

        .cor-verdeC{
            background: #afe6cb;
            color:#111111
        }
    </style>     
</head>
<body style="background:#fff">
<br>
<div class="container-fluid">
    <table width="700px" style="margin-left:auto;margin-right:auto;position:relative" class="tabela-relatorio">
        <tr>
            <td width="20%" style="font-size:18px;text-align:center;color:#111;font-weight:bold">{{$tarefa->codigo}}</td>
            <td style="font-size:14px;font-weight: bold" @if($tarefa->avanco==100) class="cor-verdeE" @else class="cor-azulE" @endif colspan="5">
                <br>
                [Registo de Actividade]<br> 
                {{$tarefa->tipo}} : {{$tarefa->titulo}}
                <br><br>
            </td>
        </tr>
        <tr>
            <td @if($tarefa->avanco==100) class="cor-verdeE" @else class="cor-azulE" @endif>ORIGEM: </td>
            <td @if($tarefa->avanco==100) class="cor-verdeC" @else class="cor-azulC" @endif colspan="5"> {{$tarefa->origem}} :  {{$tarefa->origem_dado}}</td>
        </tr>
        <tr>
            <td @if($tarefa->avanco==100) class="cor-verdeE" @else class="cor-azulE" @endif>DE: </td>
            <td width="20%" @if($tarefa->avanco==100) class="cor-verdeC" @else class="cor-azulC" @endif>
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
            <td width="10%" @if($tarefa->avanco==100) class="cor-verdeE" @else class="cor-azulE" @endif>PARA:</td>
            <td width="20%" @if($tarefa->avanco==100) class="cor-verdeC" @else class="cor-azulC" @endif>
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
            <td @if($tarefa->avanco==100) class="cor-verdeE" @else class="cor-azulE" @endif>Data de solicitação: </td>
            <td @if($tarefa->avanco==100) class="cor-verdeC" @else class="cor-azulC" @endif colspan="5">{{$tarefa->data_solicitacao}}</td>
        </tr>
        <tr>
            <td @if($tarefa->avanco==100) class="cor-verdeE" @else class="cor-azulE" @endif>Data Prevista de Execução: </td>
            <td @if($tarefa->avanco==100) class="cor-verdeC" @else class="cor-azulC" @endif colspan="2">{{$tarefa->data_prevista}}</td>
            <td width="20%" @if($tarefa->avanco==100) class="cor-verdeE" @else class="cor-azulE" @endif>Tempo de Registo: </td>
            <td colspan="2" @if($tarefa->avanco==100) class="cor-verdeC" @else class="cor-azulC" @endif>{{$tarefa->tempo}}</td>
        </tr>
        <tr>
            <td colspan="6"><br></td>
        </tr>
        <tr>
            <td @if($tarefa->avanco==100) class="cor-verdeE" @else class="cor-azulE" @endif style="text-align:center" colspan="6">Descrição </td>
        </tr>
        <tr>
            <td style="font-weight:bold" colspan="6">
                <br>
                <textarea style="border:none;width:98%;height:250px;overflow:hidden">{{$tarefa->descricao}}</textarea>
                <br>
            </td>
        </tr>
        <tr>
            @if($tarefa->avanco==100)     
                <td style="background:#afe6cb;color:#111;text-align:center" colspan="6">
                    Actividade Concluída
                </td>
            @endif
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
