<template>
   <div style="margin-bottom: -25px;" class="au-breadcrumb m-t-75">
    <div class="section__content section__content--p30">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="au-breadcrumb-content">
                        <div class="au-breadcrumb-left">
                            <span class="au-breadcrumb-span">Usted está aquí:</span>
                            <ul class="list-unstyled list-inline au-breadcrumb__list">
                                <li class="list-inline-item active">
                                    <slot name="first"></slot>
                                </li>
                                <li class="list-inline-item seprate">
                                    <span>/</span>
                                </li>
                                <li class="list-inline-item"><slot name="second"></slot></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>