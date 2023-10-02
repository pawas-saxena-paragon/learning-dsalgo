<mxfile host="app.diagrams.net" modified="2023-10-01T02:08:38.248Z" agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36" etag="LElXFSv1dlClrRrBItSa" version="22.0.0" type="device">
  <diagram name="Page-1" id="XGzfVVxB3Y_5PlgtuCQM">
    <mxGraphModel dx="1433" dy="829" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-5" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="MCKAD-0xzoo_Kd4uU-Gr-1" target="MCKAD-0xzoo_Kd4uU-Gr-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-9" value="n-1 ele &amp;lt; sum" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="MCKAD-0xzoo_Kd4uU-Gr-5">
          <mxGeometry x="-0.2852" y="2" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-7" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="MCKAD-0xzoo_Kd4uU-Gr-1" target="MCKAD-0xzoo_Kd4uU-Gr-6">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-8" value="dont take n-1 if ele &amp;gt; sum&amp;nbsp;" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="MCKAD-0xzoo_Kd4uU-Gr-7">
          <mxGeometry x="-0.2194" y="3" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-1" value="SS(arr, n, sum)" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="380" y="40" width="105" height="50" as="geometry" />
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-11" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="MCKAD-0xzoo_Kd4uU-Gr-4" target="MCKAD-0xzoo_Kd4uU-Gr-10">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-14" value="SS(arr, n-1, sum - arr[n-1]) === true" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="MCKAD-0xzoo_Kd4uU-Gr-11">
          <mxGeometry x="-0.05" y="2" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-13" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="MCKAD-0xzoo_Kd4uU-Gr-4" target="MCKAD-0xzoo_Kd4uU-Gr-12">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-15" value="SS(arr, n-1, sum - arr[n-1]) === false" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="MCKAD-0xzoo_Kd4uU-Gr-13">
          <mxGeometry x="0.5704" y="4" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-4" value="sumTakingLastELe = arr[n-1] + SS(arr, n-1, sum - arr[n-1])" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="60" y="110" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-6" value="SS(arr, n-1, sum)" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="690" y="110" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-10" value="return true" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="60" y="250" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="MCKAD-0xzoo_Kd4uU-Gr-12" value="return SS(arr, n-1, sum)" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="280" y="250" width="120" height="60" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
