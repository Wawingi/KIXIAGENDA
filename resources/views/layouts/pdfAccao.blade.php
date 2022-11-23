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
                <td style="font-size:16px;text-align:center;font-weight:bold">
                    <div>
                        <p style="font-size:18px;text-align:center;color:#111;font-weight:bold;margin-top:5px">{{$accao->codigo}}</p>
                        <p style="font-size:14px;text-align:center;font-weight:bold;margin-top:-15px"> 
                            @if($accao->estado=='ACRG')
                                <span style="color:#CC8501">[{{$accao->avanco}}% - Reagendada]</span>                    
                            @elseif($accao->estado=='ACRD')
                                <span style="color:#CC8501">[{{$accao->avanco}}% - Registada]</span>      
                            @elseif($accao->estado=='ACCO')
                                <span style="color:#339933">[Concluída]</span>   
                            @elseif($accao->estado=='ACCU')
                                <span style="color:#CC8501">[{{$accao->avanco}}% - Em Curso]</span>
                            @elseif($accao->estado=='ACRE')
                                <span style="color:#CC8501">[{{$accao->avanco}}% - Reativada]</span>
                            @elseif($accao->estado=='CUSS')
                                <span style="color:#CC8501">[{{$accao->avanco}}% - Solic. Suporte]</span>
                            @elseif($accao->estado=='CURS')
                                <span style="color:#CC8501">[{{$accao->avanco}}% - Resp. Suporte]</span>
                            @endif
                        </p>
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
                <td colspan="4" @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif>Data Criação Actividade</td>
                <td @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif>Tempo Ocorrido</td>
                <td colspan="2" @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif>
                    Utilizador Suporte
                </td>                      
            </tr>

            <tr style="text-align:center;font-weight:bold">
                <td style="color:#000" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif>{{$utilizador_responsavel}}</td>
                <td style="color:#000" colspan="4" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif>{{ date('d-m-Y',strtotime($accao->created_at)) }}</td>
                <td style="color:#000" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif>{{$total_tempo_actividade}}</td> 
                <td colspan="2" style="color:#000" @if($accao->avanco<100) class="cor-WarningC" @else class="cor-verdeC" @endif>
                @if($accao->estado=='CUSS'||$accao->estado=='CURS')
                    {{$utilizador_suporte}}
                @endif
                </td>
            </tr>         
            <tr>
                <td @if($accao->avanco<100) class="cor-Warning" @else class="cor-verde" @endif style="text-align:center" colspan="8"><B>Acções Actividade</B></td>
            </tr>
            <tr>
                <td colspan="8">
                    <table>
                        @for($i=0;$i < count($accoes);$i++)
                        <tr class="cor-azulC" style="height:20px;background-color:111">
                            <td style="text-align:center" width="60px" class="cor-azulE">
                                [{{$contAccoes--}}]
                            </td>
                            <td width="120px">
                                <span style="color:#1299E4;font-size:12px;margin-left:10px">{{$accoes[$i]->avanco}} % - {{$accoes[$i]->estado}}</span>
                                <br><span style="color:#515151;font-size:11px;margin-left:10px">{{date('d-m-Y H:m',strtotime($accoes[$i]->created_at))}}</span>
                            </td>
                            <td style="text-align:center" width="90px">
                                <img
                                    style="border:solid #fff 1px;margin:5px 0px 0px 0px"
                                    src="data:image/png;base64,{{ $accoes[$i]->id }}"
                                    alt="user-image"
                                    width="30px"
                                    height="30px"/>
                                <br><span style="color:#515151;font-size:10px">{{$accoes[$i]->utilizador_codigo}}</span>
                            </td>
                            <td width="410px" colspan="8">
                                <p style="color:#515151;margin-left:9px;font-size:11px;white-space: pre-wrap">{{$accoes[$i]->descricao}}</p>
                            </td>
                        </tr>
                        @endfor 
                    </table>
                </td>
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
