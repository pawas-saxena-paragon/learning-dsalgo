<mxfile host="app.diagrams.net" modified="2023-10-02T06:35:45.608Z" agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36" etag="CEL1d_c9yfIVi98aX1qq" version="22.0.0" type="device">
  <diagram name="Page-1" id="YeGLtYIlPJ_jK7xQo7yx">
    <mxGraphModel dx="1433" dy="829" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="rNuD59U01Drroktl--ho-3" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="rNuD59U01Drroktl--ho-1" target="rNuD59U01Drroktl--ho-2">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-6" value="if Nth ele was chosen" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="rNuD59U01Drroktl--ho-3">
          <mxGeometry x="-0.3524" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-5" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="rNuD59U01Drroktl--ho-1" target="rNuD59U01Drroktl--ho-4">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-7" value="if Nth ele was not chosen" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="rNuD59U01Drroktl--ho-5">
          <mxGeometry x="-0.4592" y="1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-10" value="choose n-1th ele" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="rNuD59U01Drroktl--ho-5">
          <mxGeometry x="0.6169" y="-1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-8" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="rNuD59U01Drroktl--ho-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="540" y="200" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-11" value="not choose n-1th ele" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="rNuD59U01Drroktl--ho-8">
          <mxGeometry x="0.2701" y="-1" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-1" value="rob(nums, n)" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="365" y="30" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-2" value="nums[n-1] + rob(nums, n-2)" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="110" y="170" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-4" value="nums[n-2] + rob(nums, n-3)" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="660" y="170" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-9" value="rob(nums, n-2)" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="485" y="200" width="120" height="60" as="geometry" />
        </mxCell>
        <mxCell id="rNuD59U01Drroktl--ho-12" value="here n is the elements in n to consider . for fist step n = nums.length" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" vertex="1" parent="1">
          <mxGeometry x="120" y="388" width="380" height="30" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
