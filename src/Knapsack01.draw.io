<mxfile host="app.diagrams.net" modified="2023-09-30T02:26:49.417Z" agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36" etag="xrpI9mmemSqRIIOIXv7G" version="22.0.0" type="device">
  <diagram name="Page-1" id="kPZWCQU35RbBuWraqgW4">
    <mxGraphModel dx="1434" dy="830" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-3" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="1Qv6ugkfnzhl1zquoh0n-1" target="1Qv6ugkfnzhl1zquoh0n-2">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="280" y="90" />
              <mxPoint x="280" y="140" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-7" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="1Qv6ugkfnzhl1zquoh0n-1" target="1Qv6ugkfnzhl1zquoh0n-6">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-14" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="1Qv6ugkfnzhl1zquoh0n-1" target="1Qv6ugkfnzhl1zquoh0n-13">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-1" value="ks(W, wtArr, valArr, n)" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="390" y="60" width="125" height="60" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-15" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="1" source="1Qv6ugkfnzhl1zquoh0n-2">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="160" y="370" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-2" value="valArr[n-1] + ks(W-wt[n-1], wtArr, valArr, n-1)" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="50" y="120" width="120" height="40" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-4" value="choose last item&lt;br&gt;if(itemWeight &amp;lt; W)" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="240" y="50" width="120" height="30" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-6" value="ks(W, wtArr, valArr, n-1)" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="670" y="120" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-8" value="not choosing last n-1 ele as weight is greater than W" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="560" y="50" width="110" height="30" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-16" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.25;exitY=1;exitDx=0;exitDy=0;" edge="1" parent="1" source="1Qv6ugkfnzhl1zquoh0n-13">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="160" y="360" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-13" value="weight condition meets but still not taking the element&lt;br&gt;ks(W, wtArr, valArr, n-1)" style="whiteSpace=wrap;html=1;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="187.5" y="180" width="182.5" height="60" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-17" value="Max fn" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" vertex="1" parent="1">
          <mxGeometry x="150" y="308" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="1Qv6ugkfnzhl1zquoh0n-18" value="result" style="ellipse;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="120" y="330" width="80" height="80" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
