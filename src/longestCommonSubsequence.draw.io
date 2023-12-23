<mxfile host="app.diagrams.net" modified="2023-10-26T06:50:16.532Z" agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36" etag="bBO0wnb6bAfh0ky2tKN5" version="22.0.8" type="device">
  <diagram name="Page-1" id="n7JMyvRkK_6OFd0jGYAU">
    <mxGraphModel dx="1434" dy="1930" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="kZq1Nt1SooRikcgzTSTR-4" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="kZq1Nt1SooRikcgzTSTR-1" target="kZq1Nt1SooRikcgzTSTR-3">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-9" value="decrease text1" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="kZq1Nt1SooRikcgzTSTR-4">
          <mxGeometry x="-0.3527" y="4" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-6" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="kZq1Nt1SooRikcgzTSTR-1" target="kZq1Nt1SooRikcgzTSTR-5">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-10" value="decrese text2" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="kZq1Nt1SooRikcgzTSTR-6">
          <mxGeometry x="-0.3714" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-8" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="kZq1Nt1SooRikcgzTSTR-1" target="kZq1Nt1SooRikcgzTSTR-7">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-11" value="decrease both text1 and text2&amp;nbsp;&lt;br&gt;as last ele are equal for both" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="kZq1Nt1SooRikcgzTSTR-8">
          <mxGeometry x="-0.025" y="-1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-1" value="lcs(text1, text2, m, n)" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="365" y="40" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-2" value="Base condt&lt;br&gt;if (m==0|| n==0)&lt;br&gt;return 0&amp;nbsp;" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="365" y="680" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-3" value="lcs(text1,text2, m-1, n)" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="30" y="100" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-5" value="lcs(text1, text2, m, n-1)" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="680" y="90" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-7" value="1 + lcs(text1, text2, m-1, n-1)" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="365" y="180" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-12" value="" style="shape=switch;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="485" y="-30" width="60" height="60" as="geometry" />
        </mxCell>
        <mxCell id="kZq1Nt1SooRikcgzTSTR-13" value="m = length of &lt;br&gt;text1 to consider&lt;br&gt;n= same for text2" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="440" y="-40" width="120" height="80" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
