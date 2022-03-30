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

        .cor-verde{
            background: #339933;
            color: #fff;
        }

        .cor-verdeC{
            background: #DBFFDB;
            color:#111111
        }

        .cor-Warning{
            background: #CC8501;
            color: #fff;
        }

        .cor-WarningC{
            background: #FFF4E1;
            color: #111;
        }
        .cor-cinzaL{
            background:#F0F0F0;
        }
    </style>     
</head>
<body style="background:#fff">
<br>
    <div class="container-fluid">
        <div style="width:685px;margin-left:auto;margin-right:auto">
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
        <div style="width:700px;margin-left:auto;margin-right:auto">
            <td style="text-align:center"><button style="margin-left:45%;background-color: #4CAF50;color:#fff" onclick="copiarTabela()" type="button">COPIAR RELATÓRIO</button></td>
        </div>

        <table width="700px" style="margin-left:auto;margin-right:auto;position:relative" class="tabela-relatorio">
            <tr>
                <td @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif style="font-size:16px;text-align:center;font-weight:bold">
                    <div @if($accao->avanco<100) style="color:#FFFF00" @else style="color:#FFFF" @endif>
                        {{$accao->codigo}}<br>
                        ({{$accao->avanco}}%)
                    </div>
                </td>
                <td style="font-size:14px" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif colspan="7">
                    <br>
                        <span @if($accao->avanco<100) style="color:#CC8501" @else style="color:#339933" @endif><B>[Registo de Acção]</B></span>
                    <br> 
                    {{$accao->tipo_abreviado}} : {{$accao->titulo}}<br><br>
                </td>
            </tr>
            <tr>
                <td width="80%" class="cor-cinzaL" colspan="8"><br>{{$accao->tarefa_descricao}}<br><br></td>
            </tr>
            <tr>
                <td style="text-align:center" @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif>Origem: </td>
                <td style="color:#000" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif colspan="7">{{$accao->acOrigemDado}}</td>
            </tr>

            <tr style="text-align:center">
                <td @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif>Responsável</td>
                <td colspan="3" @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif>Data</td>
                <td @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif>Tempo da acção</td>
                
                <td @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif>
                    Utilizador Suporte
                </td>                      
            </tr>
            <tr style="text-align:center">
                <td style="color:#000" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif>{{$utilizador_responsavel}}</td>
                @if($accao->estado=='ACRG')
                    <td style="color:#000" colspan="3" class="cor-WarningC" style="color:#111">{{ date('d-m-Y',strtotime($accao->data_prevista)) }}</td>
                @else
                    <td style="color:#000" colspan="3" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif>{{ date('d-m-Y',strtotime($accao->created_at)) }}</td>
                @endif 
                <td style="color:#000" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif>{{$accao->tempo_acao}}</td> 
                <td style="color:#000" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif>
                @if($accao->estado=='CUSS'||$accao->estado=='CURS')
                    {{$utilizador_suporte}}
                @endif
                </td>
            </tr>
         
            <tr>
                <td @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif style="text-align:center" colspan="8"><B>Descrição</B></td>
            </tr>
            <tr>
                <td style="font-weight:bold" colspan="8">
                    <p style="white-space: pre-wrap;font-weight:bold;font-size:17px">{{$accao->descricao}}</p> 
                </td>
            </tr>
            <tr style="color:#fff">
                @if($accao->estado=='ACRG')
                <td style="background:#45b080;color:#fff;font-weight:bold;text-align:center" colspan="8">
                    Actividade Reagendada
                </td>
                @elseif($accao->estado=='ACRD')
                <td style="background:#4787CD;color:#fff;font-weight:bold;text-align:center" colspan="8">
                    Actividade Registada
                </td>
                @elseif($accao->estado=='ACCO')
                <td style="background:#DBFFDB;color:#339933;font-weight:bold;text-align:center" colspan="8">
                    Actividade Concluída
                </td>
                @elseif($accao->estado=='ACCU')
                <td style="background:#F5E78E;color:#BA6907;font-weight:bold;text-align:center" colspan="8">
                    Actividade em Curso
                </td>
                @elseif($accao->estado=='ACRE')
                <td style="background:#F5E78E;color:#BA6907;font-weight:bold;text-align:center" colspan="8">
                    Actividade Reativada
                </td>
                @elseif($accao->estado=='CUSS')
                <td style="background:#F5E78E;color:#BA6907;font-weight:bold;text-align:center" colspan="8">
                    Em Curso Solic. Suporte
                </td>
                @elseif($accao->estado=='CURS')
                <td style="background:#F5E78E;color:#BA6907;font-weight:bold;text-align:center" colspan="8">
                    Em Curso Resp. Suporte
                </td>
                @endif
            </tr>
            <tr>
                <td style="background:#e3e3e3;color:#797a7a;text-align:center" colspan="8">
                    <p style="font-size:10px">Sistema KixiAgenda v2.0.1 - 2022</p>
                </td>
            </tr>
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
