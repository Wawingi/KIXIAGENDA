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
            background: #4787CD;
            color: #fff;
        }

        .cor-verdeE{
            background: #339933;
            color: #fff;
        }

        .cor-verdeC{
            background: #afe6cb;
            color:#111111
        }

        .cor-AzulC{
            background: #e0efff;
        }

        .cor-AzulLeve{
            background:#f5ffff;
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
                <td class="cor-azulE" style="text-align:center;color:#fff">
                    <div style="margin:5px 0px 4px 0px">
                        <span style="font-size:18px;text-align:center;color:#fff;font-weight:bold;margin-top:5px">{{$tarefa->codigo}}</span>
                    </div>
                </td>
                <td style="font-size:12px" class="cor-azulE" colspan="8">
                    <div style="margin:10px 0px 10px 10px">
                        <span>[Actividade]</span><br> 
                        <span><b>{{$tarefa->tipo}} : {{$tarefa->titulo}}</b></span><br><br>
                        <span>[ Tempo transcorrido: {{$tempo_ocorrido}} dias ] [ Tempo na actividade: {{$total_tempo_actividade}} ]</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="text-align:center" class="cor-verdeC">
                    <span style="color:#49693f;font-size:19px;margin-left:5px"><b>{{$accoes[0]->avanco}}%</b></span><br>   
                    <span style="color:#49693f;font-size:13px;margin-left:5px"><b>{{$accoes[0]->estado}}</b></span><br>   
                    <span style="color:#515151;font-size:12px;margin-left:5px"><b style="font-size:14px">[{{$contAccoes}}]</b> | {{date('d-m-Y',strtotime($accoes[0]->created_at))}}</span>   
                </td>
                <td width="18%" class="cor-AzulC" style="text-align:center;font-size:11px">
                    Solicitante<br>
                    <img
                        style="border:solid #fff 1px"
                        src="data:image/png;base64,{{ $imageSolicitante }}"
                        alt="user-image"
                        width="40px"
                        height="40px"/>
                    <br><span style="color:#295380;font-weight:bold">{{$solicitante}}</span>
                    <br><span style="font-weight:bold">SOLICITAÇÃO: {{date('d-m-Y',strtotime($tarefa->data_solicitacao))}}</span>
                </td>
                <td style="font-size:11px" width="40%" class="cor-AzulC" colspan="6">
                    <p>{{$tarefa->descricao}}</p>
                </td>
                <td class="cor-AzulC"  style="text-align:center;font-size:11px">
                    Responsável<br>
                    <img
                        style="border:solid #fff 1px"
                        src="data:image/png;base64,{{ $imageResponsavel }}"
                        alt="user-image"
                        width="40px"
                        height="40px"/>
                    <br><span style="color:#295380;font-weight:bold">{{$responsavel}}</span>
                    <br><span style="font-weight:bold">PREVISÃO: {{date('d-m-Y',strtotime($tarefa->data_prevista))}}</span>
                </td>
            </tr>
            
            <tr>
                <td style="font-size:14px;font-weight:bold" class="cor-verdeC" colspan="9">
                    <table>
                        <tr>                           
                            <td width="10%">
                                <img style="margin-left:10px"  src="data:image/png;base64,{{$accoes[0]->seta}}" width="30" height="50">
                                
                            </td>                           
                            <td width="40%" style="text-align:center">
                                <img
                                    style="border:solid #fff 1px"
                                    src="data:image/png;base64,{{$accoes[0]->id}}"
                                    alt="user-image"
                                    width="30px"
                                    height="30px"/>
                                <br><span style="font-size:12px;">{{$accoes[0]->utilizador_codigo}}</span>
                            </td>
                            <td width="50%">
                                <p style="text-align:left">{{$accoes[0]->descricao}}</p><br>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
           
            @for($i=1;$i < count($accoes);$i++)
                <tr class="cor-azulC" style="height:20px;background-color:111">
                    <td style="text-align:center" width="15%" class="cor-azulE">
                        [{{--$contAccoes}}]
                    </td>
                    <td >
                        <span style="color:#1299E4;font-size:9px;margin-left:10px">{{$accoes[$i]->avanco}} % - {{$accoes[$i]->estado}}</span>
                        <br><span style="color:#515151;font-size:8px;margin-left:10px">{{date('d-m-Y H:m',strtotime($accoes[$i]->created_at))}}</span>
                    </td>
                    <td style="text-align:center" width="15%" >
                        <img
                            style="border:solid #fff 1px"
                            src="data:image/png;base64,{{ $accoes[$i]->id }}"
                            alt="user-image"
                            width="30px"
                            height="30px"/>
                        <br><span style="color:#515151;font-size:8px">{{$accoes[$i]->utilizador_codigo}}</span>
                    </td>
                    <td colspan="7">
                        <p style="color:#515151;margin-left:9px;font-size:9px;white-space: pre-wrap">{{$accoes[$i]->descricao}}</p>
                    </td>
                </tr>  
            @endfor
            <tr>
                <td style="font-size:10px;text-align:center" class="cor-azulE" colspan="9">
                    <span>Existem {{$restantesAccoes}} acções mais desta actividade</span>			
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
