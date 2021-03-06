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
    </style>     
</head>
<body style="background:#fff">
<br>
    <div class="container-fluid">
        <table width="700px" style="margin-left:auto;margin-right:auto;position:relative">
            <tr>
                <td style="font-weight:bold">
                    <input style="width:100%" readonly type="text" value="{{$assunto}}" id="assunto">
                </td>
            </tr>
            <tr>
                <td style="text-align:center"><button onclick="copiarAssunto()" type="button">COPIAR ASSUNTO</button></td>
            </tr>
        </table>
        
        <br><br>
        <table width="700px" style="margin-left:auto;margin-right:auto;position:relative" class="tabela-relatorio">
            <tr>
                <td style="font-size:16px;text-align:center;color:#ba6907;font-weight:bold;background:#f5e78e">
                    {{$accao->codigo}}<br>
                    ({{$accao->avanco}}%)
                </td>
                <td style="font-size:14px;font-weight: bold" class="cor-verdeE" colspan="7">
                    <br>[Registo de Acção]<br> 
                    {{$accao->tipo_abreviado}} : {{$accao->titulo}}<br><br>
                </td>
            </tr>
            <tr>
                <td width="80%" class="cor-verdeE" colspan="8"><br>{{$accao->tarefa_descricao}}<br><br></td>
            </tr>
            <tr>
                <td class="cor-verdeE">Origem: </td>
                <td class="cor-verdeC" colspan="7">{{$accao->acOrigemDado}}</td>
            </tr>
            <tr>
                <td class="cor-verdeE">Responsável: </td>
                <td colspan="3" class="cor-verdeC">{{$utilizador_responsavel}}</td>
                <td class="cor-verdeE">Data: </td>
                @if($accao->estado=='ACRG')
                    <td colspan="3" style="background:#66f2b3;color:#111">{{$accao->data_prevista}}</td>
                @else
                    <td colspan="3" class="cor-verdeC">{{$accao->created_at}}</td>
                @endif                
            </tr>
            <tr>
                <td class="cor-verdeE">
                    @if($accao->estado=='CUSS')
                        Solicitar suporte à
                    @elseif($accao->estado=='CURS')
                        Responder suporte à
                    @endif
                </td>
                <td colspan="3" class="cor-verdeC">
                @if($accao->estado=='CUSS'||$accao->estado=='CURS')
                    {{$utilizador_suporte}}
                @endif
                </td>
                <td class="cor-verdeE" >Tempo da acção: </td>
                <td colspan="3" class="cor-verdeC">{{$accao->tempo_acao}}</td>
            </tr>
            <tr>
                <td colspan="5"><br></td>
            </tr>
            <tr>
                <td  class="cor-verdeE" style="text-align:center" colspan="8">Descrição </td>
            </tr>
            <tr>
                <td style="font-weight:bold" colspan="8">
                    <br><br><br>
                    {{$accao->descricao}}
                    <br><br><br>
                </td>
            </tr>
            <tr style="color:#ba6907">
                @if($accao->estado=='ACRG')
                <td style="background:#45b080;color:#fff;font-weight:bold;text-align:center" colspan="8">
                    Actividade Reagendada
                </td>
                @elseif($accao->estado=='ACCO')
                <td style="background:#f5e78e;color:#ba6907;font-weight:bold;text-align:center" colspan="8">
                    Actividade Concluída
                </td>
                @elseif($accao->estado=='ACCU')
                <td style="background:#f5e78e;color:#ba6907;font-weight:bold;text-align:center" colspan="8">
                    Actividade em Curso
                </td>
                @elseif($accao->estado=='ACRE')
                <td style="background:#f5e78e;color:#ba6907;font-weight:bold;text-align:center" colspan="8">
                    Actividade Reativada
                </td>
                @elseif($accao->estado=='CUSS')
                <td style="background:#f5e78e;color:#ba6907;font-weight:bold;text-align:center" colspan="8">
                    Em Curso Solic. Suporte
                </td>
                @elseif($accao->estado=='CURS')
                <td style="background:#f5e78e;color:#ba6907;font-weight:bold;text-align:center" colspan="8">
                    Em Curso Resp. Suporte
                </td>
                @endif
            </tr>
            <tr>
                <td style="background:#e3e3e3;color:#797a7a;text-align:center" colspan="8">
                    <p style="font-size:10px">Sistema KixiAgenda v1.0.0 - 2021</p>
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
    </script>
</body>
</html>
