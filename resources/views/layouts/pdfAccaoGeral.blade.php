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
            font-size: 13px;
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

        .cor-azulE{
            background: #295380;
            color: #fff;
        }

        .cor-azulC{
            background: #e0efff;
            color: #111;
        }

        .cor-verdeE{
            background: #0d661c;
            color: #fff;
        }

        .cor-verdeC{
            background: #afe6cb;
            color:#111111
        }

        .cor-AzulC{
            background: #b3f0f5;
        }
    </style>     
</head>
<body style="background:#fff">
<br>
    <div class="container-fluid">
        <div style="width:800px;margin-left:auto;margin-right:auto">
            <tr>
                <td style="font-weight:bold">
                    <input style="width:100%" readonly type="text" value="{{$assunto}}" id="assunto">
                </td>
            </tr>
            <tr>
                <td style="text-align:right"><button style="background-color: #fcb603;color:#fff" onclick="copiarAssunto()" type="button">COPIAR ASSUNTO</button></td>
            </tr>
        </div>
        
        <br><br><br>
        <div style="width:800px;margin-left:auto;margin-right:auto">
            <td style="text-align:center"><button style="margin-left:45%;background-color: #4CAF50;color:#fff" onclick="copiarTabela()" type="button">COPIAR RELATÓRIO</button></td>
        </div>
        <br>

        <table width="800px" style="margin-left:auto;margin-right:auto;position:relative" class="tabela-relatorio">
            <tr>
                <td class="cor-azulE" style="font-size:12px;text-align:center;color:#fff;font-weight:bold">
                    {{$tarefa->codigo}}<br>
                    ({{$tarefa->avanco}}%)
                </td>
                <td style="font-size:12px" class="cor-verdeC" colspan="7">
                    [Registo de Acção]<br> 
                    {{$tarefa->tipo}} : {{$tarefa->titulo}}<br>
                </td>
            </tr>
            <tr>
                <td style="text-align:center;font-size:12px">
                    SOLICITANTE<br>
                    <img
                        style="border:solid #fff 1px"
                        src="data:image/png;base64,{{ $imageSolicitante }}"
                        alt="user-image"
                        width="60px"
                        height="60px"/>
                    <br>{{$solicitante}}
                    <br>{{date('d-m-Y H:m',strtotime($tarefa->data_solicitacao))}}
                </td>
                <td width="60%" class="cor-verdeC" colspan="6"><br>{{$tarefa->descricao}}<br><br></td>
                <td style="text-align:center;font-size:12px">
                    RESPONSÁVEL<br>
                    <img
                        style="border:solid #fff 1px"
                        src="data:image/png;base64,{{ $imageResponsavel }}"
                        alt="user-image"
                        width="60px"
                        height="60px"/>
                    <br>{{$responsavel}}
                    <br>{{date('d-m-Y H:m',strtotime($tarefa->data_prevista))}}
                </td>
            </tr>
            <tr>
                <td style="text-align:center" class="cor-azulE" colspan="8">ACÇÕES REGISTADAS</td>
            </tr>
            @foreach($accoes as $accao)
                <tr @if($loop->iteration==1) style="height:20px;background-color:#cae5e8" @else style="height:20px;background-color:#f5ffff" @endif >
                    <td width="25%">
                        <span @if($loop->iteration==1) style="color:red;font-weight:bold" @else style="color:red;font-size:12px" @endif>{{$accao->avanco}} % - {{$accao->estado}}</span>
                        <br><span @if($loop->iteration==1) style="font-weight:bold" @else style="font-size:12px" @endif><b>[{{$loop->iteration}}]</b>  ||  {{date('d-m-Y H:m',strtotime($accao->created_at))}}</span>
                    </td>
                    <td style="text-align:center" width="15%" >
                        <img
                            style="border:solid #fff 1px"
                            src="data:image/png;base64,{{ $accao->id }}"
                            alt="user-image"
                            width="30px"
                            height="30px"/>
                        <br><span @if($loop->iteration==1) style="font-weight:bold" @else style="font-size:12px" @endif>{{$accao->utilizador_codigo}}</span>
                    </td>
                    <td colspan="6">
                        <p @if($loop->iteration==1) style="font-weight:bold;white-space: pre-wrap" @else style="font-size:12px;white-space: pre-wrap" @endif>{{$accao->descricao}}</p>
                    </td>
                </tr>  
            @endforeach
        </table>
    </div>
    <script>
        function copiarAssunto() {
            var copyAssunto = document.getElementById("assunto");
            copyAssunto.select();
            copyAssunto.setSelectionRange(0, 99999)
            document.execCommand("copy");
            alert("Assunto Copiado com sucesso");
        }

        function copiarTabela(){
            const elTable = document.querySelector('table');

            let range, sel;
            
            if (document.createRange && window.getSelection) {
                
                range = document.createRange();
                sel = window.getSelection();
                sel.removeAllRanges();

                try {
                range.selectNodeContents(elTable);
                sel.addRange(range);
                } catch (e) { 
                range.selectNode(elTable);
                sel.addRange(range);
                }

                if(document.execCommand('copy')){
                    alert('Relatório copiado com sucesso');
                }
            }

            sel.removeAllRanges();
        }
    </script>
</body>
</html>
